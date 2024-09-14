import jobsModel from "../models/jobModel.js";


//------------------Create Jobs-------------
export const createJobContoller = async (req, res,next) => {

    const {company,position,salary} = req.body
    if(!company || !position || !salary){
        next('Please Provide All Fields')
    }
    req.body.createdBy = req.user.userId 
    const job = await jobsModel.create(req.body)
    res.status(201).json({job});

};

//----------------Get Jobs-------------------
export const getAllJobsController = async (req,res,next) => {
    const jobs = await jobsModel.find({createdBy:req.user.userId})
   res.status(200).json({
    totalJobs: jobs.length,
    jobs,
   });
};

//----------------Update Job-------------------

export const updateJobController = async (req,res,next) => {
        const {id} = req.params
        const {company , position, salary} = req.body
        //Validation
        if(!company || !position || !salary){
            next('Please Provide All Fields')
        }

        //find job
        const job = await jobsModel.findOne({_id:id})

        //Validation
        if(!job){
            next(`no jobs found with this id ${id}`)
        }
        
        if(!req.user.userId === job.createdBy.toString()){
            next(`you are not authorized to update this job`)
            return;
        }
        const updateJob = await jobsModel.findOne({_id:id}, req.body , {
            new :true,
            runValidators :true
        })
        //res
        res.status(200).json({updateJob});
};

//----------------Delete Job-------------------

export const deleteJobController = async (req,res,next) => {

    const {id} =req.params
    //find job
    const job = await jobsModel.findOne({_id:id})

    //validation
    if(!job){
        next(`no job found with this id ${id}`)
    }
    if(!req.user.userId === job.createdBy.toString()){
        next(`you are not authorized to delete this job`)
        return;
    }
    await job.deleteOne();

    res.status(200).json({message : `Success, Job Deleted!`})
};
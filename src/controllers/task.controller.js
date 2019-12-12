import Task from '../models/Tasks';
import Project from '../models/Project';

export async function createTask(req,res){
    const {name, done,projectid}=req.body;
    const newTask = await Task.create({
        name,
        done,
        projectid
    },{
        fields:['name','done','projectid']
    });
    res.json({message: 'Nueva Tarea creada'});
}
export async function getTasks(req,res){
    const tasks= await Task.findAll({
        attributes: ['id','projectid','name','done'],
        order:[
            ['id','DESC']
        ]
    });
    res.json({tasks});
}
export async function updateTask(req,res){
    const {id} = req.params;
    const {projectid,name,done} = req.body;
    const task= await Task.findAll({
        attributes:['projectid','name','done','id'],
        where:{
            id
        }
    });
    if(task.length > 0 ){
        task.forEach(async project=> {
            await project.update({
                name,
                done,
                projectid
                
            });
        })
    }
    return res.json({
        message: 'Tarea actualizado',
        data:task
    }) 
}
export async function deleteTask(req,res){
    const {id} = req.params;
    const deleteRowCount = await Task.destroy({
        where:{
            id
        }
    });
    res.json({
        message:'Tarea borrado',
        cout: deleteRowCount
    })  
}
export async function getOneTask(req,res){
    const {id} = req.params
    const task = await Task.findOne({
        where:{id},
        attributes: ['id','projectid','name','done']
    });
    res.json(task);
}
export async function getTasksByProject(req,res){
    const {projectid}= req.params;
    const tasks = await  Task.findAll({
        attributes:['id','projectid','done','name'],
        where: {projectid}
        
    });
    res.json(tasks);
}
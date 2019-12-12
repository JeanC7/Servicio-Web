import Project from "../models/Project";

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll();
    res.json({
      data: projects
    });
  } catch (error) {
      console.log(error);
  }
}

export async function createProject(req, res) {
  const { name, priority, description, deliverydate } = req.body;
  try {
    let newProject = await Project.create(
      {
        name,
        priority,
        description,
        deliverydate
      },
      {
        fields: ["name", "priority", "description", "deliverydate"]
      }
    );
    if (newProject) {
      return res.json({
        message: "Projecto creado",
        data: newProject
      });
    }
    res.send("recivido");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Algo ha ido mal",
      data: {}
    });
  }
}

export async function getOneProject(req,res){
  try {
    const {id} = req.params;
    const project = await Project.findOne({
        where:{
            id
        }
    });
    res.json(project);
  } catch (error) {
      console.log(error);
      
  }
}

export async function deleteProject(req,res){
try {
    const {id} = req.params;
    const deleteRowCount = await Project.destroy({
        where:{
            id
        }
    });
    res.json({
        message:'Projecto borrado',
        cout: deleteRowCount
    })
} catch (error) {
    console.log(error);
    
}
}
export async function updateProject(req,res){
    const {id} = req.params;
    const {name,priority,description,deliverydate} = req.body;
    const projects= await Project.findAll({
        attributes:['id','name','description','deliverydate'],
        where:{
            id
        }
    });
    if(projects.length > 0 ){
        projects.forEach(async project=> {
            await project.update({
                name,
                priority,
                description,
                deliverydate
            });
        })
    }
    return res.json({
        message: 'Projecto actualizado',
        data:projects
    })
}
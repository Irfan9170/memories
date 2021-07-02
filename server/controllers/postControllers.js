import PostMessage from '../model/Posts.js'

export const getPosts = async (req,res)=>{
        try {
            const post = await PostMessage.find();
            res.status(200).json(post);
        } catch (error) {
            res.status(404).json(error.message)
        }
  };

  export const createPost = async (req,res)=>{
      const post = req.body;
      const newpost= new PostMessage(post);
      try {
           await newpost.save();
           res.status(201).json(newpost);
          
      } catch (error) {
        res.status(404).json(error.message)
      }
  }
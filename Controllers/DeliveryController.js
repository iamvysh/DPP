const User=require("../Schemas/UserSchema")

const delivery=require("../Schemas/Delivery")

const Movies=require("../Schemas/Movies")


const login=async(req,res)=>{
    try {
        const {email}=req.body.name

        res.status(200).json({
            status:"sucess",
            message:"login successfull"

        })
        
        const user=await delivery.findOne({email:email})

        if(!user){
            await new delivery.save({
                email:email
            })
        }


    } catch (error) {
        res.status(500).json({
            status:"error",
            error:error.message
        })
        
    }
}

const addMovie = async (req, res) => {
    try {
        const { Moviename, Rentprice } = req.body;

        // Check if the movie with the given name already exists
        const existingMovie = await Movies.findOne({ Moviename });

        if (existingMovie) {
            return res.status(400).json({
                status: "error",
                message: "Movie with this name already exists.",
            });
        }

        // Create a new movie instance
        const newMovie = new Movies({
            Moviename,
            Rentprice,
        });

        // Save the new movie to the database
        await newMovie.save();

        res.status(201).json({
            status: "success",
            message: "Movie added successfully.",
            data: newMovie,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            error: error.message,
        });
    }
};

// const addMoviesToUser = async (req, res) => {
//     try {
//         const { username, movies } = req.body;
//         console.log("user name :",username,"movies :",movies)

//         // Create a new user with the provided username
//         const user = new User({
//             name: username,
//             movies: [],
//             totalAmount: 0,
//         });

        
//         let totalSum = 0;

        
//         for (let i in movies) {
//             const { movieName, noOfDays } = movies[i];

            

//             // Calculate rent based on noOfDays (assuming Rentprice is fixed at 50)
//             const rent = noOfDays * 50;

//             // Create a movie object with the provided details
//             const movieObject = {
//                 movieName: movieName,
//                 noOfDays: noOfDays,
//                 rent: rent,
//             };

//             // Add the movie object to the user's movies array
//             user.movies.push(movieObject);

//             // Update totalSum based on the added movie's rent
//             totalSum += rent;
//         }

//         // Update the totalAmount based on the calculated totalSum
//         user.totalAmount += totalSum ;

//         // Save the new user document
//         await user.save();

//         return res.status(200).json({
//             message: 'Movies added to user successfully',
//             // totalSum: totalSum,
//             totalAmount: user.totalAmount+50
//         });
//     } catch (error) {
//         console.error('Error adding movies to user:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// };


const addMoviesToUser = async (req, res) => {
    try {
        const { username, movies } = req.body;

        // Create a new user with the provided username
        const user = new User({
            name: username,
            movies: [],
            totalAmount: 0,
        });

        let totalSum = 0;

        for (let i in movies) {
            const { movieName, noOfDays } = movies[i];

            console.log("=========  days========", parseInt(noOfDays));

            // Calculate rent based on noOfDays (assuming Rentprice is fixed at 50)
            const rent = noOfDays * 50;

            // Create a new Date object with the current date and time
            let today = new Date();
            // Add noOfDays to the current date
            today.setDate(today.getDate() + parseInt(noOfDays)  );

            const year = today.getFullYear();
            const month = (today.getMonth() + 1).toString().padStart(2, '0');
            const day = today.getDate().toString().padStart(2, '0');

            const returnDate = `${day}-${month}-${year}`;


            // Create a movie object with the provided details and return date
            const movieObject = {
                movieName: movieName,
                noOfDays: noOfDays,
                rent: rent,
                returnDate: returnDate,
            };

            // Add the movie object to the user's movies array
            user.movies.push(movieObject);

            // Update totalSum based on the added movie's rent
            totalSum += rent;
        }

        // Update the totalAmount based on the calculated totalSum
        user.totalAmount += totalSum;

        // Save the new user document
        await user.save();

        return res.status(200).json({
            message: "Movies added to user successfully",
            totalAmount: user.totalAmount + 50,
        });
    } catch (error) {
        console.error("Error adding movies to user:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

  







const findAllusers=async(req,res)=>{
    try {
        const userDetails=await User.find()
        res.status(200).json({
            message:"success",
            Data:userDetails
        })
    } catch (error) {
        res.status(500).json({
            messsage:"error",
            error:error.message
        })
    }
}

const Deletemovie = async (req, res) => {
    try {
        const user_id = req.params.id
         const movie_id=req.params.movie
        // Find the user by ID
        const user = await User.findById(user_id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        // Use $pull to remove the movie with the specified _id
        user.movies.pull({ _id: movie_id });

        // Save the updated user document
        await user.save();

        return res.status(200).json({
            message: "Movie deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting movie:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

module.exports = { addMovie,login ,addMoviesToUser,findAllusers,Deletemovie};






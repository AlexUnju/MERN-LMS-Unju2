import { app } from "./app";
require("dotenv").config();

//servidor

app.listen(process.env.PORT, () => {
    
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
    
}
    )



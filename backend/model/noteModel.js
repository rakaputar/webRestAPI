 import { Sequelize } from "sequelize";
 import db from "../config/database.js";

    const Note = db.define('notes', {
        title: Sequelize.STRING,
        content: {type: Sequelize.STRING, allowNull: true},
    }, {
        freezeTableName: true,
        timestamps: true,
        // createdAt:'date_create',
        // updatedAt:'date_update',
    });

    export default Note;

    (async () => {
        await db.sync();
    })();    
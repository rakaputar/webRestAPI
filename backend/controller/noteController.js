import { response } from "express";
import Note from "../model/noteModel.js";

export const getNotes = async (req, res) => {
    try {
        const response = await Note.findAll(); // ".findAll" == select ALL
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createNote = async (req, res) => {
    try {
        await Note.create(req.body);
        res.status(201).json("Note created"); //{msg: "Note created"}
    } catch (error) {
        console.log(error.message);
    }
}

//update
export const updateNote = async (req, res) => {
    try {
        await Note.update(req.body,{
            where: {id: req.params.id}
        })
        res.status(200).json({
            message: "Note updated"})
    } catch (error) {
        console.log(error.message)
    }
}
export const deleteNote = async (req, res) => {
    try {
        await Note.destroy({
            where: {id: req.params.id}
        })
        res.status(200).json({
            message: "Note deleted"})
    } catch (error) {
        console.log(error.message)
    }
}

//export {getNote, updateNote, createNote};
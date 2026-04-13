package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Note;
import com.example.demo.services.NotesServices;

@RestController
@RequestMapping("/notes")
@CrossOrigin("*")
public class NotesController {

    @Autowired
    private NotesServices service;

    @GetMapping
    public Iterable<Note> getNotes() {
        return service.getNotes();
    }

    @PostMapping
    public Note createNote(@RequestBody Note note) {
        System.out.println("RECEIVED NOTE ");
        System.out.println(note.getTitle());
        System.out.println(note.getPriority());
        System.out.println(note.isStatus());
        System.out.println(note.getCreatedAt());
        return service.createNote(note);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable Long id) {
        service.deleteNote(id);
    }

    @PutMapping("/{id}")
    public Note updateNote(@PathVariable Long id, @RequestBody Note note) {
        return service.updateNote(id, note);
    }
}

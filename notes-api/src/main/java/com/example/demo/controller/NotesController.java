package com.example.demo.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.demo.entity.Note;
import com.example.demo.services.NotesServices;
@RestController
@RequestMapping(path = "/notes")
public class NotesController {
	@Autowired
	NotesServices notesService;
	@GetMapping
	Note getNotes() {
		return notesService.getNotes();
	}
	@PostMapping
	public Note createNote(@RequestBody Note note) {
		return notesService.createNote(note);
	}
}

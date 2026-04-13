package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Note;
import com.example.demo.repository.NotesRepository;

@Service
public class NotesServices {

	@Autowired
	private NotesRepository repository;

	public Iterable<Note> getNotes() {
		return repository.findAll();
	}

	public Note createNote(Note note) {
		return repository.save(note);
	}

	public void deleteNote(Long id) {
		repository.deleteById(id);
	}

	public Note updateNote(Long id, Note newNote) {
		Note note = repository.findById(id).orElseThrow();
		note.setTitle(newNote.getTitle());
		note.setStatus(newNote.isStatus());
		note.setPriority(newNote.getPriority());
		note.setCreatedAt(newNote.getCreatedAt());
		return repository.save(note);
	}
}
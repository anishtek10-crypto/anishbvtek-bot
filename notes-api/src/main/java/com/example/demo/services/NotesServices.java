package com.example.demo.services; 
import org.springframework.stereotype.Service; 
import com.example.demo.entity.Note; 
@Service public class NotesServices { 
	public Note getNotes() { 
		Note note= new Note(); 
		note.setId(1234L); 
		note.setTitle("Test Note Title"); 
		note.setContent("Test Note Content"); 
		return note; 
		} 
	public Note createNote(Note note) {
		return note;
	}
	}
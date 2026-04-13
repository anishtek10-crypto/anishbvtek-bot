package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.entity.Note;

public interface NotesRepository extends CrudRepository<Note, Long> {
}
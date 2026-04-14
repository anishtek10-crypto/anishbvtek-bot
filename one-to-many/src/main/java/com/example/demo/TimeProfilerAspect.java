package com.example.demo;

import com.example.demo.controller.NoteController;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class TimeProfilerAspect {

	private final NoteController noteController;

	public TimeProfilerAspect(NoteController noteController ) {
		System.out.println("+++");
		this.noteController = noteController;
	}
	@Around("execution(* com.example.demo.service.NoteService.getOrder())" )
	public Iterable CalculatTime(ProceedingJoinPoint pjp) throws Throwable{
		long start = System.currentTimeMillis();
		Iterable result = (Iterable) pjp.proceed();
		long end = System.currentTimeMillis();
		System.out.println("total time"+ (end-start));
		return result;
	}

	@Before("execution(* com.example.demo.service.NoteService.*())")
	public void logger1() {
		System.out.println("advised+++");
	}

}

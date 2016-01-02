package main

import (
	"fmt"
	"io"
	"os"
	"sync"
	"time"
)

type Level uint8

func (level Level) String() string {
	switch level {
	case DebugLevel:
		return "debug"
	case InfoLevel:
		return "info"
	case WarningLevel:
		return "warning"
	case ErrorLevel:
		return "error"
	case FatalLevel:
		return "fatal"
	case PanicLevel:
		return "panic"
	}
	return "unknown"
}

const (
	DebugLevel Level = iota
	InfoLevel
	WarningLevel
	ErrorLevel
	FatalLevel
	PanicLevel
)

type Log struct {
	Out   io.Writer
	mu    sync.Mutex
	level Level
}

func NewLogger() *Log {
	return &Log{
		Out:   os.Stdout,
		level: DebugLevel,
	}
}

func (log *Log) setOutPut(out io.Writer) {
	log.mu.Lock()
	defer log.mu.Unlock()
	log.Out = out
}

func (log *Log) setLevel(level Level) {
	log.mu.Lock()
	defer log.mu.Unlock()
	log.level = level
	fmt.Sprint()
}

func (log *Log) log(args ...interface{}) {
	fmt.Fprintf(log.Out, "[%v][%s]: %s\n", time.Now().Format(TIME_LAYOUT), log.level, fmt.Sprint(args...))
}

func (log *Log) debug(args ...interface{}) {
	if log.level <= DebugLevel {
		log.log(args...)
	}
}

func (log *Log) info(args ...interface{}) {
	if log.level <= InfoLevel {
		log.log(args...)
	}
}

func (log *Log) error(args ...interface{}) {
	if log.level <= ErrorLevel {
		log.log(args...)
	}
}

func (log *Log) warning(args ...interface{}) {
	if log.level <= WarningLevel {
		log.log(args...)
	}
}

func (log *Log) fatal(args ...interface{}) {
	if log.level <= FatalLevel {
		log.log(args...)
	}
	os.Exit(1)
}

func (log *Log) panic(args ...interface{}) {
	if log.level <= PanicLevel {
		log.log(args...)
	}
	panic(fmt.Sprint(args...))
}

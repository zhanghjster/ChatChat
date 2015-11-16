package main

import (
	"testing"
)

func Test_GUID(t *testing.T) {
	if s := GUID(32);  len(s) != 32 {
		t.Error("GUID failed")
	}
}

func Benchmark_GUID(b *testing.B) {
	for i :=0; i < b.N; i++ {
		GUID(32)
	}
}

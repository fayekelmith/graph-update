package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func Alpha() {
    Beta()
    Gamma()
}

func AlphaHelper() {
    fmt.Println("Alpha Function Helper")
}

func FetchAlphaHandler(w http.ResponseWriter, r *http.Request) {
    result := map[string]string{"message": "Alpha fetched successfully"}
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    json.NewEncoder(w).Encode(result)
}
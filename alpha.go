package main

import (
	"encoding/json"
	"net/http"
)

func Alpha() {
    Delta() 
    NewHelper()
}

func FetchAlphaHandler(w http.ResponseWriter, r *http.Request) {
    result := map[string]string{"message": "Alpha fetched successfully"}
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    json.NewEncoder(w).Encode(result)
}
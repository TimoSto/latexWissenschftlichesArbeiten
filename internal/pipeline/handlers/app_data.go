package handlers

import (
	"ThesorTeX/internal/config"
	"ThesorTeX/internal/projects"
	"ThesorTeX/pkg/logger"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type AppData struct {
	Projects []string
	Config   config.Config
}

func HandleGetAppData(w http.ResponseWriter, r *http.Request) {
	fmt.Println("appData")
	names, err := projects.GetProjectNames(ioutil.ReadDir)
	if err != nil {
		logger.LogError("Reading project names", err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	obj := AppData{
		Projects: names,
		Config:   config.ConfigObj,
	}

	data, err := json.Marshal(obj)
	if err != nil {
		logger.LogError("Marshaling names", err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.Write(data)
}

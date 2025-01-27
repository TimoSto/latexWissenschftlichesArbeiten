package handlers

import (
	"ThesorTeX/internal/templates"
	"ThesorTeX/pkg/logger"
	"net/http"
)

func HandleProjectTemplate(w http.ResponseWriter, r *http.Request) {
	_, err := w.Write(templates.ProjectTemplate)
	if err != nil {
		logger.LogError("Writing template", err.Error())
		w.WriteHeader(http.StatusInternalServerError)
	}
}

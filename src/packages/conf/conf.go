package conf

import (
	_ "embed"
	"gopkg.in/ini.v1"
)

//go:embed VERSION
var Version string

var AutoOpenBrowser = false

func ReadConfig() {
	cfg, err := ini.Load("Config.ini")
	if err == nil {
		AutoOpenBrowser, err = cfg.Section("").Key("autoOpenBrowser").Bool()
	}
}
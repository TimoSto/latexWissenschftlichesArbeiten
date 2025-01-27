package bibliography_types

import (
	"ThesorTeX/internal/pathbuilder"
	"ThesorTeX/pkg/logger"
	"fmt"
	"io/ioutil"
	"regexp"
	"strconv"
	"strings"
)

func SaveTypeToLaTeX(project string) error {
	types, err := ReadTypes(project, ioutil.ReadFile)
	printBibCommands := "%Area to add new bibprints via gui\n" + GeneratePrintBibCommands(types) + "\n\t\t%end area"
	//fmt.Println(printBibCommands)
	ifsForBibCommands := "%Area to add new bibifs via gui\n" + GenerateIfsForBibCommands(types) + "\t\t%end area"

	citeCommands := "%Area to add citecommands via gui\n" + GenerateCiteCommands(types) + "%end area"
	ifsForCiteCommands := "%Area to add citeifs via gui\n" + GenerateIfsForCiteCommands(types) + "\t\t%end area"
	ifsForInlineCiteCommands := "%Area to add citeifs_inline via gui\n" + GenerateIfsForInlineCiteCommands(types) + "\t\t%end area"
	// fmt.Println(ifsForCiteCommands)
	file, err := ioutil.ReadFile(pathbuilder.GetPathInProject(project, "styPackages/literatur.sty"))
	if err != nil {
		logger.LogError(fmt.Sprintf("Reading ./projects/%s/styPackages/literatur.sty", project), err.Error())
		return err
	}
	m1 := regexp.MustCompile(`(?s)%Area to add new bibifs via gui(.*?)%end area`)
	newFile := m1.ReplaceAllString(string(file), ifsForBibCommands)
	m2 := regexp.MustCompile(`(?s)%Area to add new bibprints via gui(.*?)%end area`)
	newFile = m2.ReplaceAllString(newFile, printBibCommands)
	m3 := regexp.MustCompile(`(?s)%Area to add citecommands via gui(.*?)%end area`)
	newFile = m3.ReplaceAllString(newFile, citeCommands)
	m4 := regexp.MustCompile(`(?s)%Area to add citeifs via gui(.*?)%end area`)
	newFile = m4.ReplaceAllString(newFile, ifsForCiteCommands)
	m5 := regexp.MustCompile(`(?s)%Area to add citeifs_inline via gui(.*?)%end area`)
	newFile = m5.ReplaceAllString(newFile, ifsForInlineCiteCommands)

	return ioutil.WriteFile(pathbuilder.GetPathInProject(project, "styPackages/literatur.sty"), []byte(newFile), 0644)
}

//TODO: more unittests

func GeneratePrintBibCommands(types []BibliographyType) string {
	commands := ""
	for _, lType := range types {
		command := `\newcommand{\print` + lType.Name + "}[" + strconv.Itoa(len(lType.Fields)) + "]{\n" +
			"\t" + `\hangindent=\bibparindent` + "\n" +
			"\t" + `\parindent 0pt` + "\n" +
			"\t" + `\hangafter=1` + "\n\t"
		for i, field := range lType.Fields {
			command += field.Prefix
			switch field.Style {
			case "italic":
				command += `\textit{#` + strconv.Itoa(i+1) + `}`
				break
			default:
				command += `#` + strconv.Itoa(i+1)
			}
			command += field.Suffix
		}
		command += "\n\t\\\\\n\t" + `\vspace{-12pt}` + "\n\n}\n"
		commands += command
	}

	return commands
}

var alphabeth = []string{
	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "l", "n", "o", "p",
}

func toChar(i int) string {
	return alphabeth[i-1]
}

func GenerateIfsForBibCommands(types []BibliographyType) string {
	commands := ""

	for _, lType := range types {
		command := "\t\t\t{" + lType.Name + `}{\print` + lType.Name
		for n, _ := range lType.Fields {
			fieldCommand := "#" + strconv.Itoa(n+2)
			if n > 7 {
				fieldCommand = "\temp" + toChar(n+2)
			}
			command += `{` + fieldCommand + `}`
		}
		command += `}%` + "\n"
		commands += command
	}
	return commands
}

func GenerateCiteCommands(types []BibliographyType) string {
	commands := ""

	for _, lType := range types {
		command := `\newcommand{\cite` + lType.Name + "}[" + strconv.Itoa(len(lType.CiteFields)+1) + "]{%\n\t"

		for i, field := range lType.CiteFields {
			command += field.Prefix
			switch field.Style {
			case "italic":
				command += `\textit{#` + strconv.Itoa(i+1) + `}`
				break
			default:
				command += `#` + strconv.Itoa(i+1)
			}
			command += field.Suffix
		}
		command += "#" + strconv.Itoa(len(lType.CiteFields)+1) + "%\n}\n"
		commands += command
	}

	return commands
}

func GenerateIfForCite(lType BibliographyType, footnote bool) string {
	AdditionStart := `\footnote`
	AdditionEnd := ""
	if !footnote {
		AdditionStart = "("
		AdditionEnd = ")"
	}
	command := "\t\t\t{" + lType.Name + `}{` + AdditionStart + `{#3\cite` + lType.Name

	for _, field := range lType.CiteFields {
		fieldIndex := GetFieldIndex(lType.Fields, field.Field)
		if fieldIndex == -1 {
			fieldIndex = len(lType.Fields) + GetFieldIndex(lType.CiteFields, field.Field)
		}

		command += `{\` + toChar(fieldIndex+1) + `}`
	}
	command += `{#2}` + AdditionEnd + `}`
	command += `}%` + "\n"

	return command
}

func GenerateIfsForCiteCommands(types []BibliographyType) string {
	commands := ""

	for _, lType := range types {

		commands += GenerateIfForCite(lType, true)
	}
	return commands
}

func GenerateIfsForInlineCiteCommands(types []BibliographyType) string {
	commands := ""

	for _, lType := range types {
		commands += GenerateIfForCite(lType, false)
	}
	return commands
}

func GetFieldIndex(bibFields []Field, field string) int {
	for i := 0; i < len(bibFields); i++ {
		if strings.Compare(bibFields[i].Field, field) == 0 {
			return i
		}
	}

	return -1
}

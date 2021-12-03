# LaTeX - Wissenschaftliches Arbeiten

## Inhalt

[Projektstruktur](#structure)

## Projektstruktur
<a name="structure" />

* domain
  * Programmlogik der Literatur-Organisation
* handlers
  * Handler für HTTP-Routen
* out
  * Kompilierte Frontend-Dateien
* web
  * Sourcecode für Frontend
* WA_LaTeX.go
  * Sourcecode für Literatur-Organisation
* WA_LaTeX.exe
  * Kompilierter Webserver für Literatur-Organisation
* literatur.json/literatur.csv
  * Literatur-Einträge (CSV ist für LaTeX)
* literature_types.json
  * Literaturtypen im JSON-Format
* *.sty-Dateien
  * Sylings für LaTeX
* *.tex-Dateien
  * Dateien, die zu einer PDF kompiliert werden können

## Dokumentation
Die Dokumentation zur Benutzung und des Programmcodes ist in `documentation.tex` bzw. `documentation.pdf` zu finden.
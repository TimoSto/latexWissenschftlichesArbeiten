# latexWissenschaftlichesArbeiten
## Dokumentenklasse und Struktur
Hier wird ie Dokumentenklasse "article" mit der Schriftgröße 12pt verwendet. Diese wird dann für den Standard-Text angewandt.
Die Struktur hat 5 Ebenen (Part - Subparagraph). Die Nummerierung folgt folgendem Muster:
```
A Part
 I Section
  1 Subsection
    a) Subsubsection
      aa) Paragraph
        (1) Subparagraph
```
## Überschriften anpassen
Um die ÜBerschriften alle zu nummerieren: ``\setcounter{secnumdepth}{6}``
### Part anpassen
Beim PArt soll (bis auf beim ersten) immer eine neue Seite begonnen werden. Dazu wird der Befehl neu definiert:
```
%Neue Seite für Part und kein vspace vor Part
\newcommand*\parttitle{}
\let\origpart\part%alten pert-Befehl behalten
\renewcommand*{\part}[2][]{%
   \ifnum\value{part}=0\else\clearpage\fi%at first part no \clearpage
   \vspace*{-9mm}%Remove vertical space before part-title
   \origpart{#2}%
   \renewcommand*\parttitle{#2}%
}
```
### Nummerierung
Um die Nummerierung anzupassen, müssen die Befehle überschrieben werden:
```
\renewcommand{\thepart}{\Alph{part}}
\renewcommand{\thesection}{\Roman{section}}
\renewcommand{\thesubsection}{\arabic{subsection}}
\renewcommand{\thesubsubsection}{\alph{subsubsection})}
\renewcommand{\theparagraph}{\alph{subsubsection}\alph{paragraph})}
\renewcommand{\thesubparagraph}{(\arabic{subparagraph})}
%Section-Zähler in jedem \part reseten
\makeatletter
\@addtoreset{section}{part}
\makeatother  
```
### Abstände
Für jede Ebene wird der Abstand vor und nach der Überschrift definiert:
```
\usepackage[noindentafter]{titlesec}
\def\beforeheading{12pt}%Abstand vor allen Überschriften
\def\afterheading{6pt}%Abstand nach allen Überschriften
\titlespacing{\part}{0pt}{0pt}{\afterheading}
\titlespacing{\section}{0pt}{\beforeheading}{\afterheading}
\titlespacing{\subsection}{0pt}{\beforeheading}{\afterheading}
\titlespacing{\subsubsection}{0pt}{\beforeheading}{\afterheading}
\titlespacing{\paragraph}{0pt}{\beforeheading}{\afterheading}
\titlespacing{\subparagraph}{0pt}{\beforeheading}{\afterheading}
```
Beim `\part` wird kein Abstand davor gelassen, da dabei immer eine neue Seite begonnen wird.
Die Abstände der Überschriften zur Nummerierung kann auch gesetzt werden:
```
%Format der Überschriften
\def\numbertitlespace{0.5em}%Abstand zwischen Nummerierung und Titel
\titleformat{\part}{\Large\mdseries}{\thepart}{\numbertitlespace}{}
\titleformat{\section}{\large\mdseries}{\thesection}{\numbertitlespace}{}
\titleformat{\subsection}{\large\mdseries}{\thesubsection}{\numbertitlespace}{}
\titleformat{\subsubsection}{\large\mdseries}{\thesubsubsection}{\numbertitlespace}{}
\titleformat{\paragraph}{\large\mdseries}{\theparagraph}{\numbertitlespace}{}
\titleformat{\subparagraph}{\large\mdseries}{\thesubparagraph}{\numbertitlespace}{}
```
## Inhaltsverzeichnis
Standardmäßig wird im ToC keine gepunktete Linie für PArt und Section angezeigt. Um das anzupassen:
```
%Gepunktete Linie im ToC auch bei Part und Section
\usepackage{tocloft}
\renewcommand{\cftpartdotsep}{\cftdotsep}
\renewcommand{\cftpartleader}{\normalfont\cftdotfill{\cftpartdotsep}}%gepunktete Linie bei Part nicht fett
\renewcommand{\cftsecdotsep}{\cftdotsep}
\renewcommand{\cftsecleader}{\normalfont\cftdotfill{\cftsecdotsep}}%gepunktete Linie bei Section nicht fett
%Part und Section im ToC nicht fett
\renewcommand{\cftsecfont}{\mdseries}
\renewcommand{\cftsecpagefont}{\mdseries}
\renewcommand{\cftpartfont}{\mdseries}
\renewcommand{\cftpartpagefont}{\mdseries}
```
Die Linie soll auch feiner sein: ``\renewcommand{\cftdotsep}{0.5}``
Damit die Linien bis zur Seitenzahl gehen, muss im Dokument selbst anstatt nur des ToC-Befehls folgendes geschrieben werden:
```
{\def\makebox[#1][#2]#3{#3}%
	\tableofcontents
}
```
Das ToC soll acuh bis Ebene 6 gehen:``\setcounter{tocdepth}{6}``
### Abstände und Einschübe
Die Einschübe der Ebenen entsprechen den summierten Abständen, sodass die Nummerierung von Ebene 2 auf der X-Achse an der gleichen Stelle beginnt, wie die Überschrift von Ebene 1:
```
%Abstände Nummer-Überschrift im TOC
\def\secnumwidth{20pt}
\setlength{\cftpartnumwidth}{\secnumwidth}
\setlength{\cftsecnumwidth}{\secnumwidth}
\setlength{\cftsubsecnumwidth}{\secnumwidth}
\setlength{\cftsubsubsecnumwidth}{\secnumwidth}
\setlength{\cftparanumwidth}{\secnumwidth}
\setlength{\cftsubparanumwidth}{\secnumwidth}

%Einschub der Abschnitts-Überschriften im ToC
\setlength{\cftsecindent}{20pt}
\setlength{\cftsubsecindent}{40pt}
\setlength{\cftsubsubsecindent}{60pt}
\setlength{\cftparaindent}{80pt}
\setlength{\cftsubparaindent}{100pt}
```
Es werden zudem die standardmäßig größeren Abstände vor PArt und Section entfernt:
```
\setlength{\cftbeforepartskip}{0cm}%Für Part
\setlength{\cftbeforesecskip}{0pt}%für Section
```
Um die Überschrift des ToC zu zentrieren:
```
%Übertschrift von ToC zentriert
\renewcommand{\cfttoctitlefont}{\hspace*{\fill}\LARGE}
\renewcommand{\cftaftertoctitle}{\hspace*{\fill}}
```
## Abkürzungsverzeichnis
Die Abkürzungen werden in einer CSV-Datei geführt:
```
abk;bed
z.B.;zum Beispiel
s.o.;siehe oben
```
Das Auslesen erfolgt über LaTeX`s datatool-Package:
```
%Abkürzungsverzeichnis aus CSV-Datei laden
\usepackage[utf8]{datatool}
\usepackage[utf8]{inputenc}

\DTLsetseparator{;}

\DTLloaddb{abkuerzungen}{abkuerzungen.csv}

\newcommand{\printabbreviations}[0]
{
	\begin{center}
		\begin{LARGE}
			Abkürzungsverzeichnis
		\end{LARGE}
	\end{center}	 
	\DTLforeach*{abkuerzungen}
	{\abk=abk,\bed=bed}
	{
	  \par\noindent\abk\dotfill\bed
	}
}
```
Der Befehl ``\par\noindent\abk\dotfill\bed`` gibt dabei eine Zeile aus, in der links die Abkürzung steht und rechts die Bedeutung. Dazwischen befindet sich eine gepunktete Linie.
## Fußnoten
Für die Fußnoten wird der Einschub entfernt, die Größe angepasst und der Abstand zum Test definiert:
```
%Fußnoten ohne abstand nach links
\usepackage[hang,flushmargin]{footmisc}

%Größe der Fußnoten
\renewcommand{\footnotesize}{\fontsize{10pt}{12pt}\selectfont}

%Abstand Fußzeile-Text (kann auch auskommentiert werden, da default meistens passt)
\setlength{\skip\footins}{12pt}
```
Der Abstand zwischen Fußnote und Zahl wird auf 3mm gesetzt:
```
%Abstand Fußnote - Zahl
\setlength{\footnotemargin}{3mm}
```
ACHTUNG: Der Abstand passt sich nicht an die Breite der Zahl an. Ab Fußnote 10 muss der Abstand also manuell erhöht werden. Dazu einfach im Dokument ``\setlength{\footnotemargin}{5mm}`` mit dem gewünschten Wert aufrufen.
## Header und Footer
Es ist möglich, eine Kopf- und Fußzeile einzubinden. Dazu werden zwei Page-Stile erstellt:
```
\newcommand{\mytitle}{Titel der Arbeit}
\newcommand{\myauthor}{Mein Name}

\setlength{\headheight}{15pt}%Höhe des Headers muss je nach Inhalt ggf. angepasst werden
\usepackage{fancyhdr}
\usepackage{etoolbox}
\fancypagestyle{main}{%
  \fancyhf{}%
  \fancyhead[L]{\mytitle}%
  \fancyhead[R]{\nouppercase\parttitle}%
  \fancyfoot[L]{\myauthor}%
  \fancyfoot[R]{\thepage}%
  \renewcommand{\headrulewidth}{0.4pt}%
  \renewcommand{\footrulewidth}{0.4pt}%
}

\newcommand{\plaintitle}{Abkürzungsverzeichnis}
\fancypagestyle{plain}{%
  \fancyhf{}%
  \fancyhead[L]{\mytitle}%
  \fancyhead[R]{\nouppercase\plaintitle}%
  \fancyfoot[L]{\myauthor}%
  \fancyfoot[R]{\thepage}%
  \renewcommand{\headrulewidth}{0.4pt}%
  \renewcommand{\footrulewidth}{0.4pt}%
}
```
Der ``main``-Stil hat einen Header, der mit einer Linie abgetrennt ist. Oben links steht der Titel der Arbeit (über ``\renewcommand{\mytitle}{MEIN TITEL}`` änderbar). Oben rechts steht der Titel des aktuellen Parts (Bsp.: Part 1 - Section 2 => oben links steht der Titel von Part 1). Der Footer ist ebenfalls über eine Linie abgetrennt und hat links den Autor (über ``\renewcommand{myauthor}{Mein Name}`` änderbar) und rechts die Seitenzahl.
Der ``plain``-Stil ist für die Verzeichnisse gedacht und ist genauso, wie der ``main``-Stil, hat aber oben rechts nicht den Part-Titel, sondern es wird der Befehl ``\plaintitle`` genutzt. Dieser hat den Wert "Abkürzungsverzeichnis". Beim Inhaltsverzeichnis muss dann ``\renewcommand{\plaintitle}{Inhaltsverzeichnis}`` aufgerufen werden, damit oben rechts "Inhaltsverzeichnis steht". Genauso beim Literaturverzeichnis.
Die Befehle, um zwischen den Stilen zu wechseln sind ``\frontmatter`` für die Verzeichnisse und ``\mainmatter`` für den Hauptteil:
```
\appto\frontmatter{\pagestyle{plain}}
\appto\mainmatter{\pagestyle{main}}
```
## Literaturverzeichnis
Es gibt von LaTeX selbst ein System für Literaturverzeichnisse, BibTeX. In diesem System sind Anpassungen aber sehr kompliziert, weshalb ich mich entschieden habe, es nicht zu verwenden.
Stattdessen arbeite ich wieder mit CSV-Dateien. Diese werden aus einer JSON-Datei generiert (siehe literatur.json), wodurch die unübersichtlichkeit der CSV-Dateien vernachlässigt werden kann. Über den Befehl ``convertBibToCSV.exe`` werden die Daten aus der JSON-Datei ausgelesen und in die CSV geschrieben. Die Logik dahinter kann man in der Datei ``convertBibToCSV.go`` sehen.
### Literaturverzeichnis ausgeben
Zur Ausgabe des Literaturverzeichnisses in einem Befehl wird die CSV-Datei gelesen und anhand der `type`-Spalte wird ermittelt, welcher Befehl aufgerufen wird:
```
\usepackage{xstring}
\DTLloaddb{literatur}{literatur.csv}
%Literaturverzeichnis printen
\newcommand{\printMyBibliography}[0]{
	
	\begin{center}
		\begin{LARGE}
			Literaturverzeichnis
		\end{LARGE}
	\end{center}
	%Jeder Eintrag in CSV-Datei (literatur-DB) wird auf den type überprüft und die Daten werden an den jeweiligen Command weitergegeben. (Falls type anders ist, kommt es zu einem Fehler)
	\DTLforeach*{literatur}
	{\key=key,\type=type,\autor=autor,\titel=titel,\auflage=auflage,\ort=ort,\datum=datum,\hrsg=hrsg,\band=band,\zeitschrift=zeitschrift,\seiten=seiten,\festschrift=festschrift,\autorsammel=autorsammelwerk,\titelsammel=titelsammelwerk}
	{
		\IfStrEqCase{\type}{%
        {buch}{\IfStrEqCase{\hrsg}{
				{true}{\printhrsgbook{\autor}{\titel}{\auflage}{\ort}{\datum}}
				{false}{\printbook{\autor}{\titel}{\auflage}{\ort}{\datum}}%
			}}
		{kommentar}{\IfStrEqCase{\hrsg}{
				{true}{\printhrsgcomment{\autor}{\titel}{\auflage}{\ort}{\datum}}
				{false}{\printcomment{\autor}{\titel}{\auflage}{\ort}{\datum}}%
			}}
		{essay}{\printarticle{\autor}{\titel}{\zeitschrift}{\datum}{\seiten}}
		{festschrift}{\printfestschrift{\autor}{\festschrift}{\ort}{\datum}{\seiten}}
		{sammelwerk}{\printcollection{\autor}{\titel}{\autorsammel}{\titelsammel}{\ort}{\datum}{\seiten}}
		{online}{\printonline{\autor}{\titel}{\titelsammel}{\datum}}%
    }[Oppsss, unknown case '\type'.]
	}
}
```
Die einzelnen Print-Befehle sind ähnlich aufgebaut:
```
\def\bibparindent{1.5em}
\newcommand{\printbook}[5]{
	\hangindent=\bibparindent
	\parindent 0pt
	\hangafter=1	
	\textit{#1}, #2, #3. Auflage, #4 #5
	\\
	\vspace{-12pt}%Ein Absatz (//) ist etwas viel, deswegen wird wieder 12 pt nach oben gegangen
	
}
```
Die Befehle vor der eigentlichen Ausgabe sorgen dafür, dass alles ab der zweiten Zeile ein Stück eingerückt ist. Die Leerzeile am Ende sorgt dafür, dass die erste Zeile des nächsten Eintrages nicht mehr eingerückt ist.
### Zitate
Aktuell können Zitate nicht über den Key des Eintrags gelöst werden. Es müssen die richtigen Befehle mit den richtigen Parametern aufgerufen werden, z.B.:
```
\footnote{\citehrsgbook{Semler Johannes/von Schenk, Kersten}{Arbeitshandbuch für Aufsichtsratsmitglieder}{2004}{S.30}}
```
Es wird noch daran gearbeitet, das über die Keys der Eitnräge zu lösen.
## Debugging
Um zu sehen, wo Text überläuft oder ähnliches kann im Header des Dokuments die Zeile ``%\usepackage{showframe}`` unkommentiert werden (% entfernen). Dann werden die Boxen von Header, Footer und Hauptteil auf den Seiten angezeigt.

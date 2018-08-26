set -u
MEETING=2018-W32-3\ 13h30\ • Wed\ 8th\ Aug\ •\ Minutes\ •\ First\ Mentor\ Meeting 
MD=${MEETING}.md
PDF=${MEETING}.pdf
pandoc -f markdown "${MD}" -t latex -o "${PDF}" --number-sections --number-offset=0,1 -V geometry:margin=25mm

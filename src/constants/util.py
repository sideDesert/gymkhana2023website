from bs4 import BeautifulSoup
import requests

res = requests.get('https://gymkhana.iith.ac.in/mess_council.html')

soup = BeautifulSoup(res.content, 'html.parser')

list = soup.select('.product-desc')

teamNameList = []
teamsList = []

for listItem in list:
    teamNameList.append(listItem.h4.get_text())

    teamMembers = []
    teamContainer = listItem.select('.team-container')
    for teamContainerItem in teamContainer:
        formatted = teamContainerItem.get_text().strip().replace('\n','').replace('\t', '').replace('Mail Id : ', ',').replace('   ,', ',').replace(' ,', ',').split('.in ')
        teamMembers = formatted
        for index,team in enumerate(teamMembers):
            teamMembers[index] = team.split(',')
        teamsList.append(teamMembers)

for index, team in enumerate(teamsList):
    for j, member in enumerate(team):
        for k,data in enumerate(member):
            teamsList[index][j][k] =  data.strip()

teams_to_bee_zipped = teamNameList[2:]

teamsData = zip(teams_to_bee_zipped,teamsList)



teamDisc = {}

for team in tuple(teamsData):
    teamDisc[team[0]] = team[1]

print(teamDisc)
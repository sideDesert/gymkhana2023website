import csv
data_scitech = {'infero': [], 'lambda': [], 'elektronica': [], 'robotix': [],'torque': [], 'epoch': [], 'glitch': [], 'kludge': [], 'prakriti': []}
with open('scitech data.csv') as data:
    dictionary = csv.DictReader(data)
    for row in dictionary:

        data_scitech[row['club']].append({
            'name': row[' name'].strip().title(),
            'roll': row[' roll'].strip().lower(),
            'position': row[' position'].strip().title()
        })
    
print(data_scitech)
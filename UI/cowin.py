import  requests
import json
from pprint import pprint


headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
DISTRICT_ID = '727'
date = '18-05-2021'
link='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id={}&date={}'.format(DISTRICT_ID, date)
import pdb; pdb.set_trace()
response = requests.get(link, headers=headers)
json_data = json.loads(response.text)
pprint(json_data)

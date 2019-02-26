"""
Making a HTTP request from python using requests package.

http://docs.python-requests.org/en/master/
"""

import requests

r = requests.get("http://wiki.ux.uis.no/")

print(r.status_code)
print(r.headers)
#print(r.content)
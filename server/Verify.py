import sys
import json

def validate_credentials(username, password):
    valid_username = "sobrien13@student.gsu.edu"
    valid_password = "12345"

    is_valid = username == valid_username and password == valid_password
    is_admin = username.startswith("admin")  

    return {"isValid": is_valid, "isAdmin": is_admin}

username = sys.argv[1]
password = sys.argv[2]

result = validate_credentials(username, password)
print(json.dumps(result))

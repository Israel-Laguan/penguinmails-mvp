terraform {
  required_providers {
    terracurl = {
      source  = "devops-rob/terracurl"
      version = ">=1.2.2"
    }
  }
}

provider "terracurl" {}

# Create SSH Key in Hostwinds
resource "terracurl_request" "ssh_key_add" {
  name    = "add-ssh-key"
  url     = "https://clients.hostwinds.com/cloud/api.php"
  method  = "POST"

  headers = {
    "Content-Type" = "application/x-www-form-urlencoded"
  }

  request_body = "action=add_ssh_key&name=${urlencode(var.ssh_key_name)}&API=${urlencode(var.API)}"

  response_codes = [200]
}

resource "local_file" "ssh_key_response" {
  filename = "output/${var.ssh_key_name}_add_ssh_key.json"
  sensitive_content  = terracurl_request.ssh_key_add.response # change this sensitive_content to this content
}

output "ssh_key_message" {
  value = try(jsondecode(terracurl_request.ssh_key_add.response).message, null)
  sensitive = true # if you run the code then remove this line
}

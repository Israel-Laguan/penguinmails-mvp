terraform {
  required_providers {
    terracurl = {
      source  = "devops-rob/terracurl"
      version = ">=1.2.2"
    }
  }
}

provider "terracurl" {}

# Create VPS Instance in Hostwinds
resource "terracurl_request" "add_instance" {
  name    = "add-instance"
  url     = "https://clients.hostwinds.com/cloud/api.php"
  method  = "POST"

  headers = {
    "Content-Type" = "application/x-www-form-urlencoded"
  }

  request_body = "action=add_instance&template=${var.template}&rid=${var.rid}&qty=1&keys[]=${var.ssh_key_name}&srvrname=${var.server_name}&billingcycle=${var.billingcycle}&location_id=${var.location_id}&API=${var.API}"

  response_codes = [200]
}

resource "local_file" "add_instance_response" {
  filename = "output/${var.server_name}_create_instance.json"
  content  = terracurl_request.add_instance.response
}

output "instance_message" {
  value = try(jsondecode(terracurl_request.add_instance.response).message, null)
}

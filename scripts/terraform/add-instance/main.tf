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
  name   = "add-instance"
  url    = "https://clients.hostwinds.com/cloud/api.php"
  method = "POST"

  headers = {
    "Content-Type" = "application/x-www-form-urlencoded"
  }

  request_body = format("action=add_instance&template=%s&rid=%d&qty=1&keys[]=%s&srvrname=%s&billingcycle=%s&location_id=%d&API=%s", urlencode(var.template), var.rid, urlencode(var.ssh_key_name), urlencode(var.server_name), var.billingcycle, var.location_id, urlencode(var.API))

  response_codes = [200]
}

resource "local_file" "add_instance_response" {
  filename          = "output/${var.server_name}_create_instance.json"
  sensitive_content = terracurl_request.add_instance.response
}

output "instance_message" {
  value     = try(jsondecode(terracurl_request.add_instance.response).message, null)
  sensitive = true
}

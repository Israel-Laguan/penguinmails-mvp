variable "API" {
  description = "Your Hostwinds API key"
  type        = string
  sensitive   = true
}

variable "ssh_key_name" {
  description = "SSH Key name to register"
  type        = string
}

variable "template" {
  description = "Template UUID for VPS (from get_public_images, snapshots, etc.)"
  type        = string
}

variable "rid" {
  description = "Resource ID from get_price_list"
  type        = number
}

variable "location_id" {
  description = "Location ID from get_locations"
  type        = number
}

variable "server_name" {
  description = "Name of VPS instance"
  type        = string
  default     = "TerraformVPS"
}

variable "billingcycle" {
  description = "Billing cycle"
  type        = string
  default     = "monthly"

  validation {
    condition     = contains(["hourly", "monthly"], var.billingcycle)
    error_message = "Allowed values for billingcycle are \"hourly\" or \"monthly\"."
  }
}

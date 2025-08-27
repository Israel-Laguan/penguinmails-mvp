variable "API" {
  description = "Your Hostwinds API key"
  type        = string
  sensitive   = true
}

variable "ssh_key_name" {
  description = "SSH Key name to register"
  type        = string
}

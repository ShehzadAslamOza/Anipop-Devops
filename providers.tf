terraform {
 required_providers {
  kubernetes = {
   source = "hashicorp/kubernetes"
   version = "2.11.0"
  }
 }
}

provider "kubernetes" {
    # No config_path or config_context
}

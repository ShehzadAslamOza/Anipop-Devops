terraform {
  required_providers {
    kubernetes = {
      source = "hashicorp/kubernetes"
      version = "2.17.0"
    }
  }
}

provider "kubernetes" {
    config_path    = "C:\Users\shehzad\Desktop\Devops-Project\kubeconfig"
    config_context = "minikube"
}
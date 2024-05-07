resource "kubernetes_namespace" "example" {
  metadata {
    name = "react-minikube-tf"
  }
}

resource "kubernetes_deployment" "example" {
  metadata {
    name = "anipop-deployement"
    labels = {
      test = "anipop-site"
    }
    namespace = "react-minikube-tf"
  }

  spec {
    replicas = 3

    selector {
      match_labels = {
        test = "anipop-site"
      }
    }

    template {
      metadata {
        labels = {
          test = "anipop-site"
        }
      }

      spec {
        container {
          image = "shehzadaslamoza/anipop-devops"
          name  = "example"

          resources {
            requests = {
              cpu  = "100m"  # Adjust based on observed usage
              memory = "100Mi" # Adjust based on observed usage
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "example" {
  metadata {
    name = "anipop-service"
    namespace = "react-minikube-tf"
  }

  spec {
    selector = {
      test = "anipop-site"
    }

    type = "NodePort"  # Expose the service on a random port on the Minikube node
    port {
      port        = 80  # Define the port within the cluster for your app (typically 80 for HTTP)
      target_port = 3000  # Map the service port to the container port where your app listens (usually 80)
    }
  }
}

# Horizontal Pod Autoscaler (HPA)
resource "kubernetes_horizontal_pod_autoscaler" "example" {
  metadata {
    name      = "anipop-hpa"
    namespace = kubernetes_namespace.example.metadata.0.name
  }

  spec {
    scale_target_ref {
      api_version = "apps/v1"
      kind        = "Deployment"
      name        = kubernetes_deployment.example.metadata.0.name 
    }

    min_replicas = 1
    max_replicas = 5
    metrics {
      type = "Resource"
      resource {
        name = "cpu"
        target {
          type                 = "Utilization"
          average_utilization = 70 
        }
      }
    }
  }
}

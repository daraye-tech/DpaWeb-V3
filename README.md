# DpaWeb-V3

DpaWeb-V3 is a modern [Next.js](https://nextjs.org/) web application, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and designed for scalable deployment using Docker, Kubernetes, and Helm. It features a CI/CD pipeline powered by GitHub Actions for automated testing, code quality checks, container publishing, and Helm chart updates.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Docker Workflow](#docker-workflow)
- [Kubernetes Deployment](#kubernetes-deployment)
- [Helm Chart Usage](#helm-chart-usage)
- [CI/CD Pipeline](#cicd-pipeline)
- [Ingress Configuration](#ingress-configuration)
- [Troubleshooting](#troubleshooting)
- [Learn More](#learn-more)
- [License](#license)
- [Maintainers](#maintainers)

---

## Project Structure

```
DpaWeb-V3/
├── k8s/
│   └── manifests/
│       ├── deployment.yml      # Kubernetes Deployment manifest
│       ├── ingress.yml         # Kubernetes Ingress manifest
│       └── service.yml         # Kubernetes Service manifest
├── js-app-chart/               # Helm chart for Kubernetes deployment
│   └── values.yaml             # Chart values (image tag, etc.)
├── src/                        # Application source code
├── Dockerfile                  # Container build instructions
├── .github/workflows/ci.yml    # GitHub Actions CI/CD workflow
└── README.md
```

---

## Prerequisites

- **Node.js** (recommended LTS version)
- **npm** or **yarn**
- **Docker** (for containerization)
- **Kubernetes** (local cluster via Minikube, kind, or cloud provider)
- **kubectl** (Kubernetes CLI)
- **Helm** (Kubernetes package manager)
- **GitHub account** (for CI/CD and secrets management)

---

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Access the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Edit pages:**
   Modify `pages/index.tsx` to update the main page. Changes auto-update as you edit.

5. **API routes:**
   Access [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Edit `pages/api/hello.ts` for custom API logic.

---

## Docker Workflow

1. **Build the Docker image:**
   ```bash
   docker build -t <your-dockerhub-username>/next-js-app:<tag> .
   ```

2. **Run the container locally:**
   ```bash
   docker run -p 8080:8080 <your-dockerhub-username>/next-js-app:<tag>
   ```

---

## Kubernetes Deployment

### Manual Deployment

1. **Apply manifests:**
   ```bash
   kubectl apply -f k8s/manifests/deployment.yml
   kubectl apply -f k8s/manifests/service.yml
   kubectl apply -f k8s/manifests/ingress.yml
   ```

2. **Check resources:**
   ```bash
   kubectl get pods
   kubectl get svc
   kubectl get ingress
   ```

### Helm Chart Deployment

1. **Customize values:**
   Edit `js-app-chart/values.yaml` to set the correct image repository and tag.

2. **Install with Helm:**
   ```bash
   helm install <release-name> ./js-app-chart/
   ```

3. **Upgrade (if needed):**
   ```bash
   helm upgrade <release-name> ./js-app-chart/
   ```

---

## CI/CD Pipeline

Automated workflows are defined in `.github/workflows/ci.yml`:

- **Build and Test:** Installs dependencies, builds the app, runs tests if available.
- **Code Quality:** Runs ESLint for static analysis.
- **Docker Push:** Builds and pushes the Docker image to DockerHub using secrets for authentication.
- **Helm Chart Update:** Updates the image tag in the Helm chart after a successful push, then commits and pushes the change.

**Secrets Required:**
- `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` for DockerHub authentication.
- `TOKEN` for GitHub push permissions.

---

## Ingress Configuration

- The Ingress manifest (`k8s/manifests/ingress.yml`) routes traffic to the application.
- Hostname is configurable (default: `next-js-app.local`).
- For local clusters, map the hostname to your ingress controller IP in `/etc/hosts`:
  ```
  <ingress-controller-ip> next-js-app.local
  ```
- For Minikube, run:
  ```bash
  minikube tunnel
  ```

---

## Troubleshooting

- **Helm install fails due to existing resources:**  
  Delete the resource and retry:
  ```bash
  kubectl delete ingress <ingress-name>
  ```

- **Ingress not routing:**  
  Check DNS and ingress controller setup.

- **Pod not starting:**  
  View logs:
  ```bash
  kubectl logs deployment/<deployment-name>
  ```

- **CI/CD failures:**  
  Check GitHub Actions logs for details.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js) - feedback and contributions welcome!

You can also deploy on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) if desired. See [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## License

MIT

---

## Maintainers

- daraye-tech

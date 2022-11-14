This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). For Parsing Resume (extracting data using [pyresparser](https://pypi.org/project/pyresparser/) module), Django REST API is used.

## Setup

1. Clone or download this repo into your local system <br/>
`git clone ssh://john@example.com/path/to/my-project.git `
2. Open the repo folder and open it in terminal

## Installation

**For Frontend:**
```bash
cd frontend
yarn # or npm install
```

**For Backend:**

```bash
cd backend
pip install -r ./requirements.txt 
py manage.py makemigrations
py manage.py migrate
```
For setting up pip [environment](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/).

#

## Getting Started

First, run the development server:

```bash
#in frontend folder
npm run dev  
# or
yarn dev

#in backend folder
py manage.py runserver
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

## References

- Django [Resume Parser](https://github.com/OmkarPathak/ResumeParser) Base Project
- Pyresparser [Documentation](https://github.com/OmkarPathak/pyresparser)

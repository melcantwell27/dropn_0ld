from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-n73n*9-zp@^5nr10(3vhdq6*1l_(&08c%7pyfoxi&_qjfsnbxg'

DEBUG = True

ALLOWED_HOSTS = []

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',  # Include Django REST Framework
    'dropn'
]
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',  # Add this line for CORS support
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'dropn.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'dropn.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'db',
        'USER': 'db_user',
        'PASSWORD': 'SlowSteady',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'America/New_York'

USE_I18N = True

USE_TZ = True

STATIC_URL = '/static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'dropn.User'

SESSION_ENGINE = 'django.contrib.sessions.backends.db'

SESSION_COOKIE_NAME = 'sessionid'

SESSION_COOKIE_AGE = 360000  # Set to 1 hour (in seconds)

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
    ],
}

# CORS settings
CORS_ALLOW_ALL_ORIGINS = False
CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',  # Add your whitelisted origins here
    # Add more origins as needed
]

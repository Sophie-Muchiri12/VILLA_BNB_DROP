from flask import Flask, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from flask_cors import CORS
from datetime import timedelta

# Initialize the database and migration objects
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    
    # Configure CORS for all routes and allow credentials
    CORS(app, resources={r"/*": {"origins": "http://localhost:3000", "methods": ["GET", "POST", "DELETE", "OPTIONS"], "supports_credentials": True}})
    
    app.config['SECRET_KEY'] = "6e60f334ca270f07cff4b7d87b581d4d"
    app.config.from_object(Config)
    
    # Ensure cookies can be shared across origins for sessions
    app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=1)
    app.config['SESSION_COOKIE_SAMESITE'] = "None"  # Necessary for cross-site cookie sharing
    app.config['SESSION_COOKIE_SECURE'] = False  # Set to True in production

    # Initialize the database and migration
    db.init_app(app)
    migrate.init_app(app, db)

    # Import routes
    from routes import create_routes
    create_routes(app, db)

    # Add the after_request function for CORS headers
    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return response

    return app
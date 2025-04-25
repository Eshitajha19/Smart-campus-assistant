from flask import Flask, request, jsonify
import openai  

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chatbot_response():
    user_message = request.json.get('message', '')
    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": user_message}]
    )
    
    return jsonify({"response": response['choices'][0]['message']['content']})

@app.route('/dashboard-data', methods=['GET'])
def dashboard_data():
    analytics = {
        "active_users": 120,
        "heatmap": "Loaded",
        "recommendations": ["AI Study Guide", "Event Updates"]
    }
    return jsonify(analytics)

if __name__ == '__main__':
    app.run(debug=True)
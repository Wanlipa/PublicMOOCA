###Resource: https://scikit-learn.org/stable/modules/model_persistence.html
import sys, json
from sklearn.externals import joblib

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    data = read_in()

    ## Course Bloom Taxonomy Prediction
    model_loaded = joblib.load('data/KmeansModel/modelBloom.pkl')
    print(model_loaded.predict(data))

# Start process
if __name__ == '__main__':
    main()


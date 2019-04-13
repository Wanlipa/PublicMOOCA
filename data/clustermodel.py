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

    ## Course Length Prediction
    model_loaded = joblib.load('data/KmeansModel/modelLenght.pkl')

    ## Course Bloom Taxonomy Prediction
    # model_loaded = joblib.load('MODEL/modelBloom.pkl')

    ## Course Number of Component Prediction
    # model_loaded = joblib.load('MODEL/modelNumberCom.pkl')
    ## Course Sequence Component Prediction
    # model_loaded = joblib.load('MODEL/modelSequenceCom.pkl')

    # print(model_loaded)

    ## K-Means Clustering
    # print('Your course is in cluster {} '.format(model_loaded.predict(data)))
    print(model_loaded.predict(data))

    ## Agglomerative Clustering
    # print(data)
    # print(model_loaded.fit_predict(data))

# Start process
if __name__ == '__main__':
    main()


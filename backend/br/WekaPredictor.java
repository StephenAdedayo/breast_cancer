import weka.core.Instances;
import weka.core.converters.ConverterUtils.DataSource;
import weka.classifiers.Classifier;

public class WekaPredictor {
    public static void main(String[] args) throws Exception {
        String modelPath = args[0]; // model.model
        String inputPath = args[1]; // input.arff

        Classifier cls = (Classifier) weka.core.SerializationHelper.read(modelPath);
        DataSource source = new DataSource(inputPath);
        Instances data = source.getDataSet();
        data.setClassIndex(data.numAttributes() - 1);

        double prediction = cls.classifyInstance(data.instance(0));
        System.out.println(data.classAttribute().value((int) prediction));
    }
}

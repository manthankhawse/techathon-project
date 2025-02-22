import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { examDetails } from '../constants/utils/constants';

const MultiSelect = ({ options, value, onChange }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.multiSelectButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.multiSelectButtonText}>
          {value.length ? value.join(', ') : 'Select Programs'}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Programs</Text>
            <ScrollView>
              {options.map((option, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.optionItem}
                  onPress={() => {
                    const newValue = value.includes(option)
                      ? value.filter(item => item !== option)
                      : [...value, option];
                    onChange(newValue);
                  }}
                >
                  <View style={styles.checkbox}>
                    {value.includes(option) && <View style={styles.checked} />}
                  </View>
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const SingleSelect = ({ options, value, onChange }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.multiSelectButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.multiSelectButtonText}>
          {value || 'Select Option'}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Option</Text>
            <ScrollView>
              {options.map((option, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.optionItem}
                  onPress={() => {
                    onChange(option);
                    setModalVisible(false);  // Close the modal after selection
                  }}
                >
                  <View style={styles.checkbox}>
                    {value === option && <View style={styles.checked} />}
                  </View>
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default function Exam() {
  const { exam } = useLocalSearchParams();
  const examData = examDetails[exam];

  const [formData, setFormData] = useState({
    programs: [] // Initialize programs as an empty array
  });
  const [response, setResponse] = useState(null);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // const requestData = {
    //   category: formData.category,
    //   jee_rank: Number(formData.jee_rank),
    //   gender: formData.gender,
    //   programs: formData.programs, 
    // };

    // console.log(requestData.programs);
    // console.log(formData.programs);

    console.log("THis ran");

    console.log(formData);
    try {
      const res = await fetch(examData.API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const jsonResponse = await res.json();
      console.log(jsonResponse);
      setResponse(jsonResponse);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  if (!examData) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Exam not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{exam}</Text>
      {examData.fields.map((field, index) => (
        <View key={index} style={styles.fieldContainer}>
          <Text style={styles.label}>{field.name.replace('_', ' ').toUpperCase()}</Text>
          {field.type === 'text' && (
            <TextInput
              style={styles.input}
              value={formData[field.name] || ''}
              onChangeText={(value) => handleChange(field.name, value)}
            />
          )}
          {field.type === 'radio' && (
            <View style={styles.radioContainer}>
              {field.options.map((option, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.radioOption}
                  onPress={() => handleChange(field.name, option)}
                >
                  <View
                    style={[
                      styles.radioButton,
                      formData[field.name] === option && styles.selectedRadioButton,
                    ]}
                  />
                  <Text style={styles.radioText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {field.type === 'dropdown' && (
            <MultiSelect
              options={field.options}
              value={formData[field.name] || []}
              onChange={(value) => handleChange(field.name, value)}
            />
          )}

{field.type === 'menu' && (
            <SingleSelect
              options={field.options}
              value={formData[field.name] || ''}
              onChange={(value) => handleChange(field.name, value)}
            />
          )}
        </View>

        
      ))}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {response && (
        <View style={styles.responseContainer}>
          <Text style={styles.responseText}>{JSON.stringify(response, null, 2)}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginRight: 5,
  },
  selectedRadioButton: {
    backgroundColor: 'white',
  },
  radioText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  responseContainer: {
    marginTop: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  responseText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Courier New',
  },
  // New styles for multi-select
  multiSelectButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  multiSelectButtonText: {
    fontSize: 16,
    color: '#121212',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#121212',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'white',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: 'white',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
  doneButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 15,
  },
  doneButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
});
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { examDetails } from '../constants/utils/constants';

// const MultiSelect = ({ options, value, onChange }) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View>
//       <TouchableOpacity
//         style={styles.multiSelectButton}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.multiSelectButtonText}>
//           {value.length ? value.join(', ') : 'Select Programs'}
//         </Text>
//       </TouchableOpacity>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Select Programs</Text>
//             <ScrollView>
//               {options.map((option, idx) => (
//                 <TouchableOpacity
//                   key={idx}
//                   style={styles.optionItem}
//                   onPress={() => {
//                     const newValue = value.includes(option)
//                       ? value.filter(item => item !== option)
//                       : [...value, option];
//                     onChange(newValue);
//                   }}
//                 >
//                   <View style={styles.checkbox}>
//                     {value.includes(option) && <View style={styles.checked} />}
//                   </View>
//                   <Text style={styles.optionText}>{option}</Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//             <TouchableOpacity
//               style={styles.doneButton}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.doneButtonText}>Done</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };


// const SingleSelect = ({ options, value, onChange }) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View>
//       <TouchableOpacity
//         style={styles.multiSelectButton}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.multiSelectButtonText}>
//           {value || 'Select Option'}
//         </Text>
//       </TouchableOpacity>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Select Option</Text>
//             <ScrollView>
//               {options.map((option, idx) => (
//                 <TouchableOpacity
//                   key={idx}
//                   style={styles.optionItem}
//                   onPress={() => {
//                     onChange(option);
//                     setModalVisible(false);  // Close the modal after selection
//                   }}
//                 >
//                   <View style={styles.checkbox}>
//                     {value === option && <View style={styles.checked} />}
//                   </View>
//                   <Text style={styles.optionText}>{option}</Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//             <TouchableOpacity
//               style={styles.doneButton}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.doneButtonText}>Done</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default function Exam() {
//   const { exam } = useLocalSearchParams();
//   const examData = examDetails[exam];

//   const [formData, setFormData] = useState({
//     programs: [] // Initialize programs as an empty array
//   });
//   const [response, setResponse] = useState(null);

//   const handleChange = (name, value) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     // const requestData = {
//     //   category: formData.category,
//     //   jee_rank: Number(formData.jee_rank),
//     //   gender: formData.gender,
//     //   programs: formData.programs, 
//     // };

//     // console.log(requestData.programs);
//     // console.log(formData.programs);

//     console.log("THis ran");

//     console.log(formData);
//     try {
//       const res = await fetch(examData.API, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const jsonResponse = await res.json();
//       console.log(jsonResponse);
//       setResponse(jsonResponse);
//     } catch (error) {
//       console.error('Error making POST request:', error);
//     }
//   };

//   if (!examData) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text style={styles.text}>Exam not found</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>{exam}</Text>
//       {examData.fields.map((field, index) => (
//         <View key={index} style={styles.fieldContainer}>
//           <Text style={styles.label}>{field.name.replace('_', ' ').toUpperCase()}</Text>
//           {field.type === 'text' && (
//             <TextInput
//               style={styles.input}
//               value={formData[field.name] || ''}
//               onChangeText={(value) => handleChange(field.name, value)}
//             />
//           )}
//           {field.type === 'radio' && (
//             <View style={styles.radioContainer}>
//               {field.options.map((option, idx) => (
//                 <TouchableOpacity
//                   key={idx}
//                   style={styles.radioOption}
//                   onPress={() => handleChange(field.name, option)}
//                 >
//                   <View
//                     style={[
//                       styles.radioButton,
//                       formData[field.name] === option && styles.selectedRadioButton,
//                     ]}
//                   />
//                   <Text style={styles.radioText}>{option}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           )}
//           {field.type === 'dropdown' && (
//             <MultiSelect
//               options={field.options}
//               value={formData[field.name] || []}
//               onChange={(value) => handleChange(field.name, value)}
//             />
//           )}

// {field.type === 'menu' && (
//             <SingleSelect
//               options={field.options}
//               value={formData[field.name] || ''}
//               onChange={(value) => handleChange(field.name, value)}
//             />
//           )}
//         </View>

        
//       ))}
//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>

//       {response && (
//         <View style={styles.responseContainer}>
//           <Text style={styles.responseText}>{JSON.stringify(response, null, 2)}</Text>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#121212',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//   },
//   fieldContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     color: 'white',
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     backgroundColor: 'white',
//     borderRadius: 5,
//     padding: 10,
//     fontSize: 16,
//   },
//   radioContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginVertical: 5,
//   },
//   radioOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   radioButton: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: 'white',
//     marginRight: 5,
//   },
//   selectedRadioButton: {
//     backgroundColor: 'white',
//   },
//   radioText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#6200ea',
//     paddingVertical: 12,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: 'white',
//     fontSize: 18,
//   },
//   responseContainer: {
//     marginTop: 20,
//     backgroundColor: '#333',
//     padding: 10,
//     borderRadius: 5,
//   },
//   responseText: {
//     color: 'white',
//     fontSize: 14,
//     fontFamily: 'Courier New',
//   },
//   // New styles for multi-select
//   multiSelectButton: {
//     backgroundColor: 'white',
//     borderRadius: 5,
//     padding: 10,
//   },
//   multiSelectButtonText: {
//     fontSize: 16,
//     color: '#121212',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#121212',
//     borderRadius: 10,
//     padding: 20,
//     width: '80%',
//     maxHeight: '80%',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 15,
//   },
//   optionItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#333',
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderWidth: 2,
//     borderColor: 'white',
//     marginRight: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   checked: {
//     width: 12,
//     height: 12,
//     backgroundColor: 'white',
//   },
//   optionText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   doneButton: {
//     backgroundColor: '#6200ea',
//     paddingVertical: 12,
//     borderRadius: 5,
//     marginTop: 15,
//   },
//   doneButtonText: {
//     textAlign: 'center',
//     color: 'white',
//     fontSize: 16,
//   },
// });

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Platform, StyleSheet, TouchableOpacity, Modal, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { examDetails } from '../constants/utils/constants';
import logo from '../assets/images/Logo_white.png';
import Icon from "react-native-vector-icons/MaterialIcons";

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

  const [drawerVisible, setDrawerVisible] = useState(false);

const showDrawer = () => setDrawerVisible(true);
const hideDrawer = () => setDrawerVisible(false);

useEffect(() => {
  if (response) {
    showDrawer();
  }
}, [response]);


  if (!examData) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Exam not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        {/* <TouchableOpacity style={styles.profileIcon}> */}
        <Icon name="account-circle" size={40} color="white" marginTop={30} marginRight={25} />
        {/* </TouchableOpacity> */}
      </View>
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
      <SafeAreaView style={styles.container}>
        <ScrollView>
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
        </ScrollView>
        </SafeAreaView>
        {drawerVisible && (
  <Modal transparent={true} animationType="slide" visible={drawerVisible}>
    <View style={styles.drawerOverlay}>
      <View style={styles.drawer}>
        <TouchableOpacity onPress={hideDrawer} style={styles.closeButton}>
          <Icon name="close" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.drawerTitle}>Recommended Colleges</Text>
        <ScrollView>
          {response?.recommendations?.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>College: {item.name || item.college_name || item.college || item.institute || "N/A"}</Text>
              {(item.closingRank || item.closing_rank) && <Text style={styles.cardText}>Closing Rank: {item.closingRank || item.closing_rank || "N/A"}</Text>}
              {(item.branch || item.academic_program_name) && <Text style={styles.cardText}>Branch: {item.branch || item.academic_program_name || "N/A"}</Text>}
              {item.category && <Text style={styles.cardText}>Category: {item.category}</Text>}
              
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  </Modal>
)}

        </KeyboardAvoidingView>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height:'100%',
    width:'100%',
    // backgroundColor: 'red',
  },
  header: {
    width: 400,
    height: 110,
    backgroundColor: '#217B58',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // marginBottom: 20,
    marginTop: 0,
  },
  drawerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  
  drawer: {
    backgroundColor: '#217B58',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '60%',
  },
  
  drawerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  
  cardText: {
    fontSize: 16,
    color: '#217B58',
  },
  
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  
  logo: {
    width: 135,
    height: 75,
    resizeMode: 'contain',
    marginTop: 40,
  },
  profileIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 15,
    marginTop: 30,

  },

  title: {
    fontSize: 40,
    fontWeight:900,
    marginBottom: 20,
    textAlign: 'center',
    color: '#217B58',
    // marginTop: -30,
  },
  fieldContainer: {
    marginBottom: 25,
  },
  label: {
    color: '#217B58',
    fontSize: 16,
    marginBottom: 8,
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
    borderWidth: .35,
    borderColor:'black',
    backgroundColor:'white',
    marginRight: 5,
  },
  selectedRadioButton: {
    backgroundColor: '#217B58',
  },
  radioText: {
    color: '#217B58',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#217B58',
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
    backgroundColor: '#F1FBF9',
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
    color: '#217B58',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1FBF9',
  },
  modalContent: {
    backgroundColor: '#F1FBF9',
    borderRadius: 10,
    padding: 25,
    width: '80%',
    maxHeight: '80%',
    
    // Border properties
    borderWidth: 0.5,          // Thickness of the border
    borderColor: '#217B58',   // Change color as needed
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // Shadow property for Android
    elevation: 6,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight:'700',
    color: '#217B58',
    marginBottom: 15,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#217B58',
    fontWeight: 'bold',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#217B58',
  },
  optionText: {
    color: '#217B58',
    fontSize: 16,
  },
  doneButton: {

    backgroundColor: '#217B58',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 15,
  },
  doneButtonText: {
    textAlign: 'center',
    color: '#F1FBF9',
    fontWeight: '700',
    fontSize: 20,
  },
});
import React, {useState, useEffect} from "react";

import imageCurtir from "../assets/curtir.png";

import api from './services/api';

import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleLikeRepository(id) {
    // Implement "Like Repository" functionality
    const response = await api.post(`/repositories/${id}/like`);

    const likesRepository = response.data; 

    const UpdateRepository = repositories.map(repository => {
      if(repository.id === id){ 
        return likesRepository;
      }else{ 
        return repository;
      }
    });

    setRepositories(UpdateRepository);

  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>

          {/* Componente de Listagem */}
      <FlatList
        data={repositories}
        keyExtractor={repository => repository.id}
        renderItem={ ({item: repository}) => (

            <View style={styles.repositoryContainer}>
                
              <Text style={styles.repository}>{repository.title}</Text>

              {/* Campo das tecnologias usadas */}
              <View style={styles.techsContainer}>
                
                {repository.techs.map(tech => 
                  <Text style={styles.tech} key={tech}>
                    {tech}
                  </Text>
                )}
                
              </View>
                
                 {/* Campo de likes*/}
              <View style={styles.likesContainer}>
                <Text
                  style={styles.likeText}
                  // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
                  testID={`repository-likes-${repository.id}`}
                >

                  {`${repository.likes} curtidas`}

                </Text>
              </View>
              <Image style={styles.icon} source={imageCurtir}></Image>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleLikeRepository(repository.id)}
                // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
                testID={`like-button-${repository.id}`}
              >
                
                <Text style={styles.buttonText}>Curtir Repositório</Text>
                
                
              </TouchableOpacity>
            </View>

          )}
          ></FlatList>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  repository: {
    fontSize: 32,
    fontWeight: "bold",
  },
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "#fff",
    backgroundColor: "#7159c1",
    padding: 15,
    textAlign: 'center'
  },
  icon: { 
    height: 20,
    width: 20,
  }
});

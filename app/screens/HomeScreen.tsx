import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  FlatList,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const { width } = Dimensions.get("window");

type DrawerParamList = {
  Home: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  const [filter, setFilter] = useState<"all" | "courses" | "projects">("all");
  const [modalVisible, setModalVisible] = useState(false);

  const courseListRef = useRef<FlatList>(null);
  const projectListRef = useRef<FlatList>(null);

  const courseIndex = useRef(0);
  const projectIndex = useRef(0);

  const courses = [
    {
      id: "1",
      title: "ELC Online",
      image: require("../../assets/images/elc-online.png"),
      description: "A fun and engaging early learning program...",
    },
  ];

  const projects = [
    {
      id: "1",
      title: "Pre-School Project",
      image: require("../../assets/images/preschool.png"),
      description: "A fun and engaging early learning program...",
    },
    {
      id: "2",
      title: "Advanced Level Students Project",
      image: require("../../assets/images/advanced.png"),
      description: "Comprehensive subject guidance and training...",
    },
  ];

  const renderCard = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );

  const handleFilterChange = (value: "all" | "courses" | "projects") => {
    setFilter(value);
    setModalVisible(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (filter === "all") {
      interval = setInterval(() => {
        // Courses scroll
        if (courses.length > 1) {
          courseIndex.current = (courseIndex.current + 1) % courses.length;
          courseListRef.current?.scrollToIndex({
            index: courseIndex.current,
            animated: true,
          });
        }

        // Projects scroll
        if (projects.length > 1) {
          projectIndex.current = (projectIndex.current + 1) % projects.length;
          projectListRef.current?.scrollToIndex({
            index: projectIndex.current,
            animated: true,
          });
        }
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [filter]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <View style={styles.socialButtonsRow}>
          <TouchableOpacity style={styles.telegramBtn}>
            <Image source={require("../../assets/images/telegram.png")} style={styles.logoIcon} />
            <Text style={styles.logoText}>Telegram</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.whatsappBtn}>
            <Image source={require("../../assets/images/whatsapp.png")} style={styles.logoIcon} />
            <Text style={styles.logoText}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter Bar */}
      <View style={styles.filterBar}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#000" />
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.filterButton}>
          <Icon name="filter" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Filter Modal */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            {["all", "courses", "projects"].map((item) => (
              <TouchableOpacity key={item} onPress={() => handleFilterChange(item as any)} style={styles.modalItem}>
                <Text style={styles.modalText}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Content */}
      {filter === "all" && (
        <>
          <Text style={styles.sectionTitle}>Our Courses</Text>
          <FlatList
            ref={courseListRef}
            data={courses}
            renderItem={renderCard}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingVertical: 10 }}
            pagingEnabled
          />

          <Text style={styles.sectionTitle}>Our Popular Projects</Text>
          <FlatList
            ref={projectListRef}
            data={projects}
            renderItem={renderCard}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingVertical: 10 }}
            pagingEnabled
          />
        </>
      )}

      {filter === "courses" && (
        <>
          <Text style={styles.sectionTitle}>Our Courses</Text>
          {courses.map((item) => renderCard({ item }))}
        </>
      )}

      {filter === "projects" && (
        <>
          <Text style={styles.sectionTitle}>Our Popular Projects</Text>
          {projects.map((item) => renderCard({ item }))}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#eee",
    paddingTop: 55,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  socialButtonsRow: {
    flexDirection: "row",
    gap: 10,
  },
  telegramBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#061B64",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  whatsappBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C6E30",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  logoIcon: {
    width: 26,
    height: 26,
    marginRight: 8,
    resizeMode: "contain",
  },
  logoText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  filterBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  searchBox: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  filterButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 240,
  },
  modalItem: {
    paddingVertical: 10,
  },
  modalText: {
    fontSize: 16,
    color: "#1C6E30",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    width: width * 0.8,
    marginHorizontal: 10,
  },
  cardImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
  },
  applyButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  applyText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default HomeScreen;

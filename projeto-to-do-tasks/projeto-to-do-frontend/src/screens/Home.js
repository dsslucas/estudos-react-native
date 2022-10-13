import React from 'react'
import { ImageBackground, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native'
import commonStyles from '../commonStyles'

// Imagens
import Month from '../../assets/imgs/month.jpg'
import Today from '../../assets/imgs/today.jpg'
import Tomorrow from '../../assets/imgs/tomorrow.jpg'
import Week from '../../assets/imgs/week.jpg'
import Login from '../../assets/imgs/login.jpg'

export default props => {
    return (
        <ImageBackground source={Login} style={styles.background}>
            <SafeAreaView style={styles.container}>

                <SafeAreaView style={styles.header}>
                    <Text style={styles.title}>Tasks</Text>
                    <Text style={styles.subtitle}>Escolha um período</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.content}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("TaskList", {
                            title: "Hoje",
                            daysAhead: 0
                        })}
                        style={styles.card}

                    >
                        <SafeAreaView>
                            <ImageBackground
                                source={Today}
                                style={styles.cardBackground}
                                imageStyle={{ borderRadius: 20 }}
                            >
                                <Text style={styles.cardTitle}>Hoje</Text>
                            </ImageBackground>
                        </SafeAreaView>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("TaskList", {
                            title: "Amanhã",
                            daysAhead: 1
                        })}
                        style={styles.card}
                    >
                        <SafeAreaView>
                            <ImageBackground
                                source={Tomorrow}
                                style={styles.cardBackground}
                                imageStyle={{ borderRadius: 20 }}
                            >
                                <Text style={styles.cardTitle}>Amanhã</Text>
                            </ImageBackground>
                        </SafeAreaView>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("TaskList", {
                            title: "Semana",
                            daysAhead: 7
                        })}
                        style={styles.card}
                    >
                        <SafeAreaView>
                            <ImageBackground
                                source={Week}
                                style={styles.cardBackground}
                                imageStyle={{ borderRadius: 20 }}
                            >
                                <Text style={styles.cardTitle}>Semana</Text>
                            </ImageBackground>
                        </SafeAreaView>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("TaskList", {
                            title: "Mês",
                            daysAhead: 30
                        })}
                        style={styles.card}
                    >
                        <SafeAreaView>
                            <ImageBackground
                                source={Month}
                                style={styles.cardBackground}
                                imageStyle={{ borderRadius: 20 }}
                            >
                                <Text style={styles.cardTitle}>Mês</Text>
                            </ImageBackground>
                        </SafeAreaView>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    background: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    header: {
        justifyContent: 'flex-end',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 10,
        color: '#fff'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: commonStyles.colors.secondary
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    card: {
        margin: 10,
        height: '40%',
        width: '40%',
    },
    cardBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardTitle: {
        fontSize: 20,
        color: commonStyles.colors.secondary
    }
})
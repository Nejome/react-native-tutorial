import React, {useEffect} from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native'

import styles from './popularjobs.style'
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import {COLORS, SIZES} from "../../../constants";
import useFetch from "../../../hooks/useFetch";

const PopularJobs = () => {
    const {data, isLoading, error} = useFetch({endpoint: 'search', query: {query: 'React developer', num_pages: '1'}});

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Popular Jobs</Text>
            <TouchableOpacity>
                <Text style={styles.headerBtn}>Show All</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
            {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    <Text>Some thin went wrong</Text>
                ) : (
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <PopularJobCard
                            item={item}
                        />
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{columnGap: SIZES.medium}}
                    horizontal
                />
            )
            }
        </View>
    </View>
  )
}

export default PopularJobs